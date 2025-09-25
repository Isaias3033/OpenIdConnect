// Importa as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDVmVU4pnnMv-bQTI8AjGaKEEOYqG1OtOE",
    authDomain: "openidconnect-81f1d.firebaseapp.com",
    projectId: "openidconnect-81f1d",
    storageBucket: "openidconnect-81f1d.firebasestorage.app",
    messagingSenderId: "682156752578",
    appId: "1:682156752578:web:3ccae2fbde88837c3dc55b"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(); //configura o firebase authentication
const db = getFirestore(); //configura o firestore

//monitora o estado de autenticação do usuário
onAuthStateChanged(auth, (user) => {
    //busca o id do usuário autenticado salvo no localStorage
    const loggedInUserId = localStorage.getItem('loggedInUserId');

    //se o ID estiver no localStorage, tenta obter os dados do Firestore
    if (loggedInUserId) {
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId); //referência ao documento do usuário no firestore

        getDoc(docRef) //Busca o documento
        .then((docSnap) => {
            //se o documento existir, exibe os dados na interface
            if (docSnap.exists()) {
                const userData = docSnap.data();
                document.getElementById('loggedUserFName').innerText = userData.firstName;
                document.getElementById('loggedUserEmail').innerText = userData.email;
                document.getElementById('loggedUserLName').innerText = userData.lastName;
            } else {
                console.log("ID não encontrado no Documento");
            }
        })
        .catch((error) => {
            console.log("documento não encontrado");
        });
    } else {
        console.log("ID de usuário não encontrado no localStorage");
    }
});

//Lógica de Logout
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedInUserId'); //remove o ID do LocalStorage
    signOut(auth) //realiza logout
    .then(() => {
        window.location.href = 'index.html'; //redireciona para a página de login
    })
    .catch((error) => {
        console.error('Error Signing out:', error);
    });
});