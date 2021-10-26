import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CalendarList } from 'react-native-calendars';


const RANGE = 24;
const initialDate = '2012-05-10';

const CalendarsList = () => {
    const [selected, setSelected] = useState(initialDate);
    const [marked, setMarked] = useState({})

    useState(() => {
        const getData = async () => {
            try {
                const response = await fetch("http://192.168.1.38:3000/api/list/616d91d7c739150fa85e40ae", {
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json',
                        'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI2MTZkOTFkN2M3MzkxNTBmYTg1ZTQwYWUiLCJuYW1lIjoiSGFiaWIgS2_DpyIsImVtYWlsIjoiaGFiaWJrb2M3MUBob3RtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJEFRdVdpVlY5UHpXcGRzM3BaWXRhdE8uZ2k0WFNOc25aSko3ZDBtZkMwWE9qdGJXUS5icHA2IiwiZGF0ZSI6IjIwMjEtMTAtMThUMTU6MjU6MTEuMTk2WiIsIl9fdiI6MH0sImlhdCI6MTYzNDkxMjc1MywiZXhwIjoxNjM0OTE2MzUzfQ.DxVAUM5OnvmLhXMCtGFaBlPx9XXsmY8o84me-O5OZwY",
                    }
                })
                const data = await response.json()
                const mappedData = data.map((item) =>  {return item.markedDates})
                console.log("object", mappedData)
                const reduced = mappedData.reduce((acc, currentItem) => {
                    const { date, ...coolItem } = currentItem;
                    acc[date] = coolItem
                    return acc;
                },
                    {},
                )
                console.log("REDUCED", reduced)
                setMarked(reduced)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])

    const onDayPress = day => {
        setSelected(day.dateString);
        console.log("object", day.dateString)
    };
console.log("marked", marked)
    return (
        <CalendarList
            markingType={'period'}
            current={initialDate}
            pastScrollRange={RANGE}
            futureScrollRange={RANGE}
            renderHeader={renderCustomHeader}
            theme={theme}
            onDayPress={onDayPress}
            markedDates={marked}
        />
    );
};

const theme = {
    'stylesheet.calendar.header': {
        dayHeader: {
            fontWeight: '600',
            color: '#48BFE3'
        }
    },
    'stylesheet.day.basic': {
        today: {
            borderColor: '#48BFE3',
            borderWidth: 0.8
        },
        todayText: {
            color: '#5390D9',
            fontWeight: '800'
        }
    }
};

function renderCustomHeader(date) {
    const header = date.toString('MMMM yyyy');
    const [month, year] = header.split(' ');
    const textStyle = {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        color: '#5E60CE',
        paddingRight: 5
    };

    return (
        <View style={styles.header}>
            <Text style={[styles.month, textStyle]}>{`${month}`}</Text>
            <Text style={[styles.year, textStyle]}>{year}</Text>
        </View>
    );
}

export default CalendarsList;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    },
    month: {
        marginLeft: 5
    },
    year: {
        marginRight: 5
    }
});