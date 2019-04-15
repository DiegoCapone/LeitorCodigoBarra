import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Button, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class BadInstagramCloneApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      camera: false,
      codeBar: null
    };
  }

  onCamera = () => this.setState({ camera: true, codeBar: null })
  ofCamera = () => this.setState({ camera: false, codeBar: null })



  render() {
    return (
      <View style={styles.container}>
        {/* {this.state.camera &&
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes[0].data);
            }}
          />} */}
        {this.state.camera ? <View style={styles.containerCamera}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes[0].data);
              if (barcodes[0].data) {
                this.setState({ codeBar: barcodes[0].data })
                this.setState({ camera: false })
              }
            }}
          />
          <View style={styles.ButtonCamera}>
            <Button
              onPress={this.ofCamera}
              title="Cancelar"
              color="#841584"
            />
          </View>
        </View> : null}
        {!this.state.camera ?
          <View>
            <Text style={styles.text}>{this.state.codeBar}</Text>
            <View style={styles.containerButton}>
              <Button
                onPress={this.onCamera}
                title="Adicionar Código de Barras"
                color="#841584"
              />
            </View>
          </View> : null}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  containerCamera: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerButton: {
    justifyContent: 'center',
    width: '90%',
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    marginTop: 20,
    paddingHorizontal: 3,
  },
  ButtonCamera: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
  }
});