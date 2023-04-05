import React from 'react';
import { useRouter } from "expo-router";
import {
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import styles from "./nearbyjobs.style.js";
import { COLORS } from '../../../constants';
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {

    const router = useRouter();
    const { data, isLoading, error } = useFetch("search", {
        query: "React Native developer",
        num_pages: "1",
    });

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
                        Nearby jobs
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                    >
                        <Text
                            style={styles.headerBtn}
                        >
                            Show all
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default Nearbyjobs;
