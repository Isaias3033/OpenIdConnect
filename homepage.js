// Importa Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore, getDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDVmVU4pnnMv-bQTI8AjGaKEEOYqG1OtOE",
    authDomain: "openidconnect-81f1d.firebaseapp.com",
    projectId: "openidconnect-81f1d",
    storageBucket: "openidconnect-81f1d.firebasestorage.app",
    messagingSenderId: "682156752578",
    appId: "1:682156752578:web:3ccae2fbde88837c3dc55b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Monitora login
onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("Usuário autenticado:", user.uid);

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // Preenche dados com o que está no Firestore
            const userData = docSnap.data();
            document.getElementById("loggedUserFName").innerText = userData.firstName ?? "";
            document.getElementById("loggedUserLName").innerText = userData.lastName ?? "";
            document.getElementById("loggedUserEmail").innerText = userData.email ?? "";
        } else {
            // Se não existir no Firestore (caso Google login), cria o doc mínimo
            console.log("Documento do usuário não existe. Criando...");
            await setDoc(docRef, {
                email: user.email,
                firstName: user.displayName?.split(" ")[0] ?? "",
                lastName: user.displayName?.split(" ").slice(1).join(" ") ?? ""
            });

            // Atualiza a tela
            document.getElementById("loggedUserFName").innerText = user.displayName?.split(" ")[0] ?? "";
            document.getElementById("loggedUserLName").innerText = user.displayName?.split(" ").slice(1).join(" ") ?? "";
            document.getElementById("loggedUserEmail").innerText = user.email ?? "";
        }
    } else {
        console.log("Nenhum usuário logado. Redirecionando...");
        window.location.href = "index.html";
    }
});

// Logout
document.getElementById("logout").addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "index.html";
    }).catch((error) => {
        console.error("Erro ao sair:", error);
    });
});
