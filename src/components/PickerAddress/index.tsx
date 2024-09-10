import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PickerAddress = () => {
  const [dataCountries, setDataCountries] = useState([]);
  const [codeCountries, setCodeCountries] = useState('VN');
  const [dataCities, setDataCities] = useState([]);
  const [codeCities, setCodeCities] = useState('');
  const [dataCounties, setDataCounties] = useState([]);
  const [codeCounties, setCodeCounties] = useState('');
  const [dataWards, setDataWards] = useState([]);
  const [codeWards, setCodeWards] = useState('');

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (codeCountries) {
      fetchCities();
      setCodeCities('');
      setCodeCounties('');
      setCodeWards('');
    }
  }, [codeCountries]);

  useEffect(() => {
    if (codeCities) {
      fetchCounties();
      setCodeCounties('');
      setCodeWards('');
    }
  }, [codeCities]);

  useEffect(() => {
    if (codeCounties) {
      fetchWards();
      setCodeWards('');
    }
  }, [codeCounties]);

  const fetchCountries = () => {
    fetch('https://raw.githubusercontent.com/sunrise1002/hanhchinhVN/master/countries.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setDataCountries(Object.values(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchCities = () => {
    fetch('https://raw.githubusercontent.com/sunrise1002/hanhchinhVN/master/dist/tinh_tp.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setDataCities(Object.values(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchCounties = () => {
    fetch('https://raw.githubusercontent.com/sunrise1002/hanhchinhVN/master/dist/quan_huyen.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setDataCounties(Object.values(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchWards = () => {
    fetch('https://raw.githubusercontent.com/sunrise1002/hanhchinhVN/master/dist/xa_phuong.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setDataWards(Object.values(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderList = (data, placeholder) => {
    if (data.length > 0) {
      return data.map((item, key) => (
        <Picker.Item label={item.name} value={item.code} key={key} />
      ));
    }
    return <Picker.Item label={placeholder} value={'noData'} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerWrapper}>
        <Text style={styles.label}>Country</Text>
        <Picker
          selectedValue={codeCountries}
          style={styles.picker}
          onValueChange={(itemValue) => setCodeCountries(itemValue)}
        >
          {renderList(dataCountries, 'Không có dữ liệu')}
        </Picker>
      </View>

      {codeCountries && (
        <View style={styles.pickerWrapper}>
          <Text style={styles.label}>City</Text>
          <Picker
            selectedValue={codeCities}
            style={styles.picker}
            onValueChange={(itemValue) => setCodeCities(itemValue)}
          >
            {renderList(dataCities, 'Không có dữ liệu')}
          </Picker>
        </View>
      )}

      {codeCities && (
        <View style={styles.pickerWrapper}>
          <Text style={styles.label}>County</Text>
          <Picker
            selectedValue={codeCounties}
            style={styles.picker}
            onValueChange={(itemValue) => setCodeCounties(itemValue)}
          >
            {renderList(dataCounties, 'Không có dữ liệu')}
          </Picker>
        </View>
      )}

      {codeCounties && (
        <View style={styles.pickerWrapper}>
          <Text style={styles.label}>Ward</Text>
          <Picker
            selectedValue={codeWards}
            style={styles.picker}
            onValueChange={(itemValue) => setCodeWards(itemValue)}
          >
            {renderList(dataWards, 'Không có dữ liệu')}
          </Picker>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  pickerWrapper: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default PickerAddress;
