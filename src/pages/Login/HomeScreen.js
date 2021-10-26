import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    GetPosts,
    postsSelector,
    postLoadingSelector,
} from '../../stores/dashboard/dashboardSlice';
import { User } from '../../user/User';
import { MyContainer } from '../../components/ui/Container/MyContainer';
import GoalsCard from '../../components/ui/AppSpecifics/GoalsCard';


const HomeScreen = () => {

    const dispatch = useDispatch();
    const post = useSelector(postsSelector);
    const loading = useSelector(postLoadingSelector);

    console.log("POST", post)
    console.log("POST")

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        let user = new User();
        const id = await user.getUserId();
        dispatch(GetPosts({ id }));
    }

    return (
        <MyContainer title={"Main Page"} footerActiveIndex={0}>
            <FlatList
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                data={post}
                renderItem={({ item, index }) => (
                    <GoalsCard key={index} data={item} />
                )}
            />
        </MyContainer>
    );
};


export default HomeScreen;