import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from 'react-native';

import styles from "./popularjobs.style.js";
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch.js";

const Popularjobs = () => {

    const router = useRouter();
    const { data, isLoading, error } = useFetch("search", {
        query: "React developer",
        num_pages: "1",
    });

    console.log(data);

    return (
        <>
            <View
                style={styles.container}
            >
                <View
                    style={styles.header}
                >
                    <Text
                        style={styles.headerTitle}
                    >
                        Popular jobs
                    </Text>
                    <TouchableOpacity>
                        <Text
                            style={styles.headerBtn}
                        >
                            Show all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={styles.cardsContainer}
                >
                    {isLoading ? (
                            <ActivityIndicator
                                animating={isLoading}
                                size="large"
                                hidesWhenStopped={true}
                                color={COLORS.primary}
                            />
                        ) : error ? (
                            <Text>
                                Something went wrong😞
                            </Text>
                        ): (
                            <FlatList
                                refreshing={true}
                                data={data}
                                renderItem={({ item }) => (
                                    <PopularJobCard
                                        item={item}
                                    />
                                )}
                                keyExtractor={(item) => item.job_id}
                                contentContainerStyle={
                                    {
                                        columnGap: SIZES.medium
                                    }
                                }
                                horizontal
                            />
                    )}
                </View>
            </View>
        </>
    );
};

export default Popularjobs;
