import { ImageBackground, StyleSheet, View, Text, Dimensions } from 'react-native';
import {s, vs} from 'react-native-size-matters'
import { VideoIcon } from '../assets/icons';
import { FC } from "react";


const MeditationCardComponent:FC<MeditationCardProps> = ({imageURL, title, date}) => {
  return (
    <MeditationCard imageURL={imageURL} title={title} date={date}/>
  )
}
export default MeditationCardComponent;

const PhoneWidth = Dimensions.get('window').width
const cardWidth = (PhoneWidth - s(14) * 3) / 2

interface MeditationCardProps{
  imageURL: string,
  title: string,
  date: string
}

const MeditationCard:FC<MeditationCardProps> = ({imageURL, title, date}) => {
  return (
    <ImageBackground style={styles.imageContainer} imageStyle={styles.image}
      source={{ uri: imageURL }}>

      <View style={styles.overlay} />
      <View style={styles.liveBadge}>
        <Text style={styles.liveText}>Live</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.textBox}>
          <VideoIcon />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(140),
    width: cardWidth,
    borderRadius: s(8),
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.7
  },
  cardContent: {
    left: s(10),
    bottom: s(10),
    position: 'absolute'
  },
  title: {
    fontSize: s(12),
    fontWeight: 500,
    color: '#fff'
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.45)'
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dateText: {
    fontSize: s(11),
    color: '#fff',
    marginStart: s(7)
  },
  liveBadge: {
    backgroundColor: '#E41111',
    height: s(22),
    width: s(39),
    borderRadius: s(90),
    position: 'absolute',
    top: vs(7),
    right: s(10),
    justifyContent: 'center',
    alignItems: 'center'
  },
  liveText: {
    fontSize: s(11),
    fontWeight: 500,
    color: '#fff'
  }
})
