import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MovieSeatSelect = ({ navigation }) => {

  const rows = 6;
  const seatsPerRow = 8;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleSeat = (row, seat) => {
    const seatIndex = selectedSeats.findIndex(
      selectedSeat => selectedSeat.row === row && selectedSeat.seat === seat
    );

    if (seatIndex !== -1) {
      setSelectedSeats(prevSelectedSeats =>
        prevSelectedSeats.filter(
          selectedSeat => !(selectedSeat.row === row && selectedSeat.seat === seat)
        )
      );
    } else {
      setSelectedSeats(prevSelectedSeats => [
        ...prevSelectedSeats,
        { row: row, seat: seat }
      ]);
    }
  };

  const formattedDateTime = currentDateTime.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });

  return (
    <View style={styles.container}>
      <Text style={styles.movixer}>Movixer</Text>
      <Text style={styles.header}>Select Your Seats</Text>
      <Text style={styles.dateTime}>{formattedDateTime}</Text>
      <View style={styles.seatMap}>
        {Array.from({ length: rows }, (_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {Array.from({ length: seatsPerRow }, (_, seatIndex) => (
              <TouchableOpacity
                key={seatIndex}
                style={[
                  styles.seat,
                  selectedSeats.some(
                    selectedSeat => selectedSeat.row === rowIndex && selectedSeat.seat === seatIndex
                  ) && styles.selectedSeat
                ]}
                onPress={() => toggleSeat(rowIndex, seatIndex)}
              >
                <Text style={styles.seatText}>{String.fromCharCode(65 + rowIndex)}{seatIndex + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <Text style={styles.selectedText}>You have selected {selectedSeats.length} seats</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => 
            // console.log('Booked seats:', selectedSeats)
            navigation.navigate('MovieTicket')
        }
        >
        <Text style={styles.buttonText}>Buy Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  movixer: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    color: '#E3651D'
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    color: 'white'
  },
  dateTime: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  seatMap: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  seat: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'gray',
    borderRadius: 5,
  },
  seatText: {
    fontSize: 14,
    color: 'black'
  },
  selectedSeat: {
    backgroundColor: '#E3651D',
  },
  selectedText: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white'
  },
  button: {
    backgroundColor: '#E3651D',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    margin: 15
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MovieSeatSelect;


