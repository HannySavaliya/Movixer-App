import { View , Text ,StyleSheet , Image, TouchableOpacity} from "react-native"
import { AntDesign } from '@expo/vector-icons';

const PaySuccessfully =  ({ navigation }) => {
    return (
        <View style={style.container}>
            <View style={style.success}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <AntDesign name="arrowleft" color="white" size={25} style={style.backArrow} />
            </TouchableOpacity>
                <Image source={require('../../assets/pay.png')} style={style.icon2} />
                <Text style={style.text}>Payment Successfully!!</Text>
                <Text style={style.price}>$$$$</Text>
            </View>
            <Text style={style.date}>Date | day</Text>
        </View>
    )
}
const style = StyleSheet.create ({
    container : {
        backgroundColor : 'black',
        height : '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backArrow: {
        marginTop: 20,
        marginRight: 300
    },
    success : {
        marginTop : -100,
        height : '60%',
        width: '90%',
        backgroundColor : '#077720',
        alignItems: 'center'
    },
    icon1 : {
        marginTop: 10,
        marginRight : 250
    },
    icon2 : {
        height : 100,
        width : 100,
        marginTop: 90
    },
    text : {
        color : 'white',
        fontSize : 18,
        fontWeight : 'bold',
        marginTop : 10,
    },
    price : {
        fontSize : 28,
        fontWeight : 'bold',
        color : 'white',
        marginTop : 10  
    },
    date : {
        fontSize : 20,
        fontWeight : 'medium',
        color : 'white',
        marginTop: 10,
        marginRight: 270        
    }
})
export default PaySuccessfully



