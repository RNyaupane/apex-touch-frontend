module.exports = {
  containerFull: {
    flex: 1,
    backgroundColor: '#001C30',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoImage: {
    // You can adjust the width and height properties according to your requirements
    width: 250,
    marginTop: 250,
    marginBottom: 230,
    height: 200,
    resizeMode: 'contain', // This ensures that the image maintains its aspect ratio
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'blue', // Set your desired background color
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  inputField: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rememberText: {
    marginLeft: 10,
  },
  signInText: {
    marginTop: 10,
    color: 'blue', // Set your desired text color
  },
};
