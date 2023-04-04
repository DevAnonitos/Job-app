import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

import { useRouter } from 'expo-router';
import styles from "./welcome.style";
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full-time", "Part-time", "Contractor", "Online"]

const Welcome = () => {

    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState("Full-time");

    return (
        <>
            <View>
                <View
                    style={styles.container}
                >
                    <Text
                        style={styles.userName}
                    >
                        Hello, BaoNguyen👋
                    </Text>
                    <Text
                        style={styles.welcomeMessage}
                    >
                        Find your perfect jobs
                    </Text>
                </View>

                {/* ================SearchBar=============== */}
                <View
                    style={styles.searchContainer}
                >
                    <View
                        style={styles.searchWrapper}
                    >
                        <TextInput
                            style={styles.searchInput}
                            value=''
                            onChange={() => {}}
                            textBreakStrategy="highQuality"
                            returnKeyType="search"
                            underlineColorAndroid="transparent"
                            placeholder='What are you looking for?'
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.searchBtn}
                        onPress={() => {}}
                    >
                        <Image
                            source={icons.search}
                            resizeMode='contain'
                            style={styles.searchBtnImage}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={styles.tabsContainer}
                >
                    <FlatList
                        data={jobTypes}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.tab(activeJobType, item)}
                            >
                                <Text>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </>
    );
};

export default Welcome;
