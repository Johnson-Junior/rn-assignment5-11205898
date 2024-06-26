import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

const HomePage = () => {
  const screenWidth = Dimensions.get('window').width;

  const IconRow = ({ imageSource, text }) => (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <Image source={imageSource} style={{ width: 50, height: 50 }} />
      <Text>{text}</Text>
    </View>
  );

  const TransactionRow = ({ title, amount }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      <Text style={{ fontSize: 20 }}>{title}</Text>
      <Text style={{ fontSize: 20 }}>${amount}</Text>
    </View>
  );

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginRight: 10 }}>
            <Image
              source={require('./Images/profile.png')}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View>
          <View>
            <Text style={{ color: 'gray' }}>Welcome Back</Text>
            <Text style={{ fontWeight: 'bold' }}>Eric Atsu</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={require('./Images/search.png')} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Image
          source={require('./Images/Card.png')}
          style={{ width: screenWidth * 0.8, height: screenWidth * 0.8, borderRadius: 10 }}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <IconRow imageSource={require('./Images/send.png')} text="Sent" />
        <IconRow imageSource={require('./Images/recieve.png')} text="Receive" />
        <IconRow imageSource={require('./Images/loan.png')} text="Loan" />
        <IconRow imageSource={require('./Images/topUp.png')} text="TopUp" />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, marginTop: 20 }}>
        <Text style={{ fontSize: 20 }}>Transaction</Text>
        <Text style={{ color: 'blue', fontSize: 20 }}>Sell all</Text>
      </View>
      <TransactionRow title="Apple" amount={-5,99} />
      <TransactionRow title="Spotify" amount={-12,99} />
      <TransactionRow title="Money Transfer" amount={300} />
      <TransactionRow title="Grocery" amount={-88} />
    </View>
  );
};

export default HomePage;
