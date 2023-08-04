import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '@expo/vector-icons/MaterialIcons'

const MAX_PRICE = 500;

let data = [
    {
        color: 'red',
        label: 'Red',
        itemCount: 4
    },
    {
        color: 'green',
        label: 'Green',
        itemCount: 2
    },
    {
        color: 'black',
        label: 'Black',
        itemCount: 5
    },
    {
        color: 'yellow',
        label: 'Yellow',
        itemCount: 1
    },
    {
        color: 'purple',
        label: 'Purple',
        itemCount: 1
    },
]

let sleeves = [
    {
        label: 'Sort Sleeve [20]',
        id: 1
    },
    {
        label: 'Long Sleeve [100]',
        id: 2
    },
    {
        label: 'Sleeve Less [60]',
        id: 3
    },

]

const FilterView = () => {

    const { colors } = useTheme()

    const [minPrice, setMinPrice] = useState(50)
    const [maxPrice, setMaxPrice] = useState(250)


    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12, marginBottom: 24 }}>
                    <Text style={{ fontSize: 14, fontWeight: '600' }} >Filter</Text>
                    <TouchableOpacity>
                        <Text>Reset</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingHorizontal: 12, marginTop: 14 }}>

                    <View style={{ marginBottom: 24 }}>
                        <Text> Price Range </Text>
                    </View>

                    <View style={{ height: 1, width: '100%', backgroundColor: colors.border, position: 'relative' }}>
                        <View style={{
                            position: 'absolute',
                            left: `${(100 * minPrice) / MAX_PRICE}%`,
                            width: `${(100 * (maxPrice - minPrice)) / MAX_PRICE}%`,
                            height: '100%',
                            backgroundColor: colors.primary
                        }}>

                            <View style={{
                                position: 'absolute', left: '10%', height: 24, aspectRatio: 1, alignItems: 'center',
                                justifyContent: 'center', borderRadius: 100, borderColor: colors.primary, borderWidth: 1,
                                backgroundColor: colors.background, transform: [
                                    {
                                        translateX: -12
                                    },
                                    {
                                        translateY: -12
                                    }
                                ]
                            }}>
                                <View style={{ width: 3, height: 3, borderRadius: 10, backgroundColor: colors.primary }} />
                            </View>


                            <View style={{ position: 'absolute', left: '10%' }}>
                                <SliderHandler />
                            </View>
                            <View style={{ position: 'absolute', left: '100%' }}>
                                <SliderHandler />
                            </View>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
                        <Text style={{ color: colors.text, opacity: 0.5 }}> $0 </Text>
                        <Text style={{ color: colors.text, opacity: 0.5 }}> ${MAX_PRICE} </Text>
                    </View>
                </View>

                {/* sports categories filter */}
                <View style={{ paddingHorizontal: 12, marginTop: 14 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}> Sports </Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
                        {
                            new Array(10).fill("").map((_, i) => {

                                const isSelected = i === 0;

                                return <Chip itemCount={i} label="item" isSelected={i === 0} />
                            })
                        }
                    </View>

                </View>

                {/* colors categories filter */}
                <View style={{ paddingHorizontal: 12, marginTop: 14 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}> Sports </Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
                        {
                            data.map((item, i) => {

                                const isSelected = i === 0;

                                return (
                                    <Chip itemCount={i} color={item.color} label={item.label} isSelected={i === 0} />
                                )
                            })
                        }
                    </View>

                </View>


                {/* Slevees */}
                <View style={{ paddingHorizontal: 12, marginTop: 14 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 12 }}> Sleeves </Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
                        {
                            sleeves.map((item, i) => {

                                const isSelected = i === 0;

                                return (
                                    <Chip itemCount={i} label={item.label} isSelected={i === 0} />
                                )
                            })
                        }
                    </View>

                </View>
            </ScrollView>

            <View>
                <SafeAreaView
                    edges={['bottom']}
                    style={{
                        paddingHorizontal: 24
                    }}
                >
                    <TouchableOpacity style={{
                        backgroundColor: colors.primary, height: 64, borderRadius: 64, alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        <Text style={{ color: colors.background, fontSize: 16, fontWeight: '800' }}> Apply filters </Text>
                        <View
                            style={{
                                backgroundColor: colors.background, width: 40, aspectRatio: 1, borderRadius: 40,
                                alignItems: 'center', justifyContent: 'center', position: 'absolute',
                                top: 12, right: 12, bottom: 12
                            }}
                        >
                            <Icons name='east' size={24} color={colors.text} />
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </View >
    )
}

export default FilterView

const styles = StyleSheet.create({})

const SliderHandler = () => {

    const { colors } = useTheme()

    return (
        <View style={{
            height: 24, aspectRatio: 1, alignItems: 'center',
            justifyContent: 'center', borderRadius: 100, borderColor: colors.primary, borderWidth: 2,
            backgroundColor: colors.background, transform: [
                {
                    translateX: -12
                },
                {
                    translateY: -12
                }
            ]
        }}>
            <View style={{ width: 3, height: 3, borderRadius: 10, backgroundColor: colors.primary }} />
        </View>
    )

}

const Chip = ({ isSelected, label, color, itemCount }: { isSelected: boolean, label: string, color?: string, itemCount: number }) => {

    const { colors } = useTheme()

    return (
        <View style={{ paddingHorizontal: 16, paddingVertical: 8, borderRadius: 100, flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: isSelected ? colors.text : colors.background }}>
            {
                !!color && <View style={{ width: 14, height: 14, borderRadius: 100, backgroundColor: color }} />
            }
            <Text style={{ fontSize: 16, fontWeight: '600', color: isSelected ? colors.background : colors.text }}>
                {label}
            </Text>
        </View>
    )
}