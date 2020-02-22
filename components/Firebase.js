import firebase from 'firebase';
const config={
    
              apiKey: 'AIzaSyCHqOznEmKTJO6d1vUVQU43DoZvcYOo4lc',
              authDomain: 'dauth-94d80.firebaseapp.com',
              databaseURL: 'https://dauth-94d80.firebaseio.com',
              projectId: 'dauth-94d80',
              storageBucket: 'dauth-94d80.appspot.com',
              messagingSenderId: '418818552671',
              appId: '1:418818552671:web:5b3c91e0087ee36e60fcea',
              measurementId: 'G-3HLMW07YCC'
}
const Firebase = firebase.initializeApp(config);
export default Firebase;