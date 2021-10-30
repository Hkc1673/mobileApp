import React, { useEffect } from "react";
import { View, Text, Animated } from "react-native"
import { MyContainer } from "../../../components/ui/Container/MyContainer";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Sound from 'react-native-sound';
import alarm from "../../../assets/music/alarm.mp3"

const minuteSeconds = 60;
const hourSeconds = 3600;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
};

const renderTime = (dimension, time) => {
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 32, color: "#0093c4", fontWeight: "bold" }}>{time}</Text>
            <Text>{dimension}</Text>
        </View>
    );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;

Sound.setCategory('Playback');

var ding = new Sound(alarm, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // when loaded successfully
    console.log('duration in seconds: ' + ding.getDuration() + 'number of channels: ' + ding.getNumberOfChannels());
});

const TimeScreen = () => {

    const playPause = () => {
        ding.play(success => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
            }
        });
    };

    const remainingTime = 60;

    return (
        <MyContainer title="Timer Page">
            <View style={{ alignItems: "center", justifyContent: "space-around", height: hp(80) }}>
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#EF798A"]]}
                    duration={hourSeconds}
                    initialRemainingTime={remainingTime}
                    onComplete={playPause}
                >
                    {({ elapsedTime }) =>
                        renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
                    }
                </CountdownCircleTimer>
                <CountdownCircleTimer
                    {...timerProps}
                    colors={[["#218380"]]}
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => [
                        remainingTime - totalElapsedTime > 0
                    ]}
                >
                    {({ elapsedTime }) =>
                        renderTime("seconds", getTimeSeconds(elapsedTime))
                    }
                </CountdownCircleTimer>
            </View>

        </MyContainer>
    );
}

export default TimeScreen;
