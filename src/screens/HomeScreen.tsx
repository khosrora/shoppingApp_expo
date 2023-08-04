import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'
import Icons from '@expo/vector-icons/MaterialIcons'

import { BlurView } from 'expo-blur';

import MasonryList from '@react-native-seoul/masonry-list';

const data: any = [
  {
    id: 'id123',
    imgURL:
      'https://img.modivo.cloud/product(4/6/8/6/4686cb265336c3b23c067c845b20ef1412b25996_1_4064045941304.jpg,jpg)/adidas-t-shirt-adicolor-classics-3-stripes-tee-gn3502-rouge-slim-fit.jpg',
    text: 'Pioneer LHS Chaise Lounger in Grey Colour',
  },
  {
    id: 'id124',
    imgURL:
      'https://dynamic.zacdn.com/WaFHUSMDHVtPGgBFKHQ0XHzJn5s=/filters:quality(70):format(webp)/https://static-hk.zacdn.com/p/adidas-1802-0020736-1.jpg',
    text: 'Precedant Furniture',
  },
  {
    id: 'id125',
    imgURL:
      'https://image-resizing.booztcdn.com/adidas-originals/adihd2354_cblack_10.webp?has_grey=0&has_webp=0&size=w400&dpr=2.5',
    text: 'Leverette Upholstered Platform Bed',
  },
  {
    id: 'id126',
    imgURL:
      'https://img01.ztat.net/article/spp-media-p1/6ae0bb1498c44916bfaca69d81306d24/266a6a76b6ed49678f293444210b3dc8.jpg?imwidth=762',
    text: 'Briget Accent Table',
  },
  {
    id: 'id127',
    imgURL:
      'https://pa.namshicdn.com/product/A7/455751W/v1/5-mobile-web-zoom.jpg',
    text: 'Rivet Emerly Media Console',
  },
  {
    id: 'id128',
    imgURL:
      'https://assets.adidas.com/images/w_600,f_auto,q_auto/0eee9152f28d439dbf4c711ab5617dcd_9366/V-Neck_Logo_Tee_White_II5610.jpg',
    text: 'Drew Barrymore Flower Home Accent Chair',
  }
];

const CATEGORIES = [
  "Clothing",
  "Shoes",
  "Accessories",
  "Tsherts",
  "Jeans"
]


const avatar = 'https://techtrickseo.com/wp-content/uploads/2019/10/dvjbjdfnv.jpg'


const HomeScreen = () => {

  const { colors } = useTheme();

  const [categoryIndex, setCategoryIndex] = useState(0)

  return (
    <ScrollView>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        {/* header Section */}
        <View style={{ paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', gap: 8 }}>

          <Image
            source={{ uri: avatar }}
            style={{ width: 52, aspectRatio: 1, borderRadius: 52 }}
            resizeMode='cover'
          />

          <View style={{ flex: 1 }}>
            <Text
              style={{ fontSize: 18, fontWeight: '600', marginBottom: 8, color: colors.text }} numberOfLines={1}> Hi, James </Text>
            <Text style={{ color: colors.text, opacity: 0.75 }} numberOfLines={1}> Discover Fasion that suit your style </Text>
          </View>

          <TouchableOpacity style={{ width: 52, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 52, borderWidth: 1, borderColor: colors.border }}>
            <Icons name='notifications' size={24} color={colors.text} />
          </TouchableOpacity>

        </View>

        {/* Search Section */}
        <View style={{ flexDirection: 'row', paddingHorizontal: 24, gap: 12 }}>
          <TouchableOpacity style={{ flex: 1, height: 52, borderRadius: 52, borderWidth: 1, borderColor: colors.border, alignItems: 'center', paddingHorizontal: 24, flexDirection: 'row', gap: 12 }}>
            <Icons name='search' size={24} color={colors.text} style={{ opacity: 0.5 }} />
            <Text style={{ flex: 1, fontSize: 16, color: colors.text, opacity: 0.5 }}> Search </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 52, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 52, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.primary }}>
            <Icons name='tune' size={24} color={colors.background} />
          </TouchableOpacity>
        </View>

        {/* New Collection */}
        <View style={{ paddingHorizontal: 24 }}>
          {/* title */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <Text style={{ fontSize: 20, fontWeight: '800' }}>  New Collection </Text>
            <TouchableOpacity>
              <Text>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', height: 200, gap: 12 }}>
            <View style={{ flex: 1 }}>
              <Card link="https://cdn.def-shop.com/pic530x705/adidas-originals-camiseta-verde-988018.jpg" />
            </View>
            <View style={{ flex: 1, gap: 12 }}>

              <Card link="https://outletcenter.r.worldssl.net/image/catalog/products/22/05/07/37/s220507370124-27.jpg?v=1" />
              <Card link="https://sizeer.de/media/cache/gallery/rc/g3cmyjrd/adidas-t-shirt-trefoil-tee-damen-t-shirts-gruen-gn2903.jpg" />

            </View>
          </View>
        </View>


        {/* Categoris Section */}
        <FlatList
          data={CATEGORIES}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12
          }}
          horizontal
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex === index;
            return (
              (
                <TouchableOpacity
                  onPress={() => setCategoryIndex(index)}
                  style={{
                    backgroundColor: isSelected ? colors.primary : colors.card,
                    paddingHorizontal: 24,
                    paddingVertical: 17,
                    borderRadius: 100,
                    borderWidth: isSelected ? 0 : 1,
                    borderColor: colors.border
                  }}>
                  <Text style={{
                    color: isSelected ? colors.background : colors.text, fontWeight: '600', fontSize: 16,
                    opacity: isSelected ? 1 : 0.5
                  }}> {item} </Text>
                </TouchableOpacity>
              )
            )
          }}
        />

        <MasonryList
          data={data}
          keyExtractor={(item): string => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          renderItem={({ item, i }) => (
            <View style={{ padding: 4}}>
              <View style={{ aspectRatio: i === 0 ? 1 : 2 / 3, position: 'relative', overflow: 'hidden', borderRadius: 24, padding: 12 }} >
                <Image
                  source={{ uri: item.imgURL }}
                  resizeMode='cover'
                  style={StyleSheet.absoluteFill}
                />
                <View style={[StyleSheet.absoluteFill, { padding: 12 }]}>
                  <View style={{ flexDirection: 'row', gap: 8 }}>
                    <Text style={{ flex: 1, fontSize: 12, fontWeight: '600', color: colors.text }}>  {item.id} </Text>
                    <View style={{ backgroundColor: colors.background, borderRadius: 100, height: 32, aspectRatio: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <Icons name='favorite-border' size={20} color={colors.text} />
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1 }} />
                <BlurView style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.25)', padding: 8, borderRadius: 100, overflow: 'hidden' }} intensity={20} >
                  <Text style={{ flex: 1, fontSize: 16, fontWeight: "600", color: '#fff' }} >
                    $160,00
                  </Text>
                  <TouchableOpacity style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 100, backgroundColor: '#fff' }}>
                    <Icons name='add-shopping-cart' size={14} color='#000' />
                  </TouchableOpacity>
                </BlurView>
              </View>
            </View>
          )}
          onEndReachedThreshold={0.1}
        />
      </SafeAreaView>
    </ScrollView >
  )
}

export default HomeScreen

const styles = StyleSheet.create({})

const Card = ({ link }) => {
  return (
    <View style={{ flex: 1, position: 'relative', overflow: 'hidden', borderRadius: 24 }}>
      <Image
        source={{ uri: link }}
        resizeMode='cover'
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          left: 0,
          bottom: 0
        }}
      />
      <View style={{ position: 'absolute', left: 16, top: 16, paddingHorizontal: 12, paddingVertical: 12, backgroundColor: 'rgba(0,0,0,0.15)', borderRadius: 100 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}>$130</Text>
      </View>
    </View>
  )
}