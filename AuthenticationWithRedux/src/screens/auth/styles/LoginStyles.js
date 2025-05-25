import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 150,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '800',
    color: 'white',
  },
  textFieldContainer: {
    flexDirection: 'column',
    marginTop: 16,
    gap: 10,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#A0AEB8',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#A0AEB8',
    fontWeight: '600',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
});
