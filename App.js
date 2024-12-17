import React from "react"
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import RazorpayCheckout from "react-native-razorpay";

export default function App() {
  const handlePayment = () => {
    const options = {
      description: "Sample Payment",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fhs-logo.html&psig=AOvVaw10D4t-27cNAEFSBwVObT23&ust=1726920003000000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjcqry80YgDFQAAAAAdAAAAABAE",
      currency: "INR",
      key: "rzp_test_A7RrLCigDhREel",
      amount: "10000",
      name: "Hardik Sawhney Company",
      prefill: {
        email: "hardiksawhney2003@gmail.com",
        contact: "9896987025",
        name: "Hardik"
      },
      theme: { color: "#F37254" },
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        Alert.alert(`Error: ${error.code} / ${error.description}`);
      });
  };
  return (
    <View style={styles.container}>
      <Text>Pay 100 INR</Text>
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
