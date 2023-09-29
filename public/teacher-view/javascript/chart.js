
//chart
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('chart', {
        chart: {
            type: 'areaspline',

        },
        title: {
            text: 'Total subscrptions'
        },

        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],

        },
        yAxis: {
            title: {
                text: 'count'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' Date'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0
            }
        },
        series: [{
            name: 'Subscrptions',
            data: [3, 4, 3, 5, 4, 10, 12],
        }]
    });
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    signInWithPopup,
    deleteUser,
    FacebookAuthProvider,
    onAuthStateChanged,
    reauthenticateWithCredential,
    EmailAuthProvider,
    updatePassword,
    linkWithCredential,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore, collection, where, getDocs, doc, query, getDoc, addDoc, setDoc, updateDoc, deleteDoc, orderBy, limit, startAt as startAtt, startAfter as startAfterr } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getDatabase, set, ref, update, child, get, orderByKey, endAt, orderByChild, limitToFirst, limitToLast, query as squery, startAt, startAfter, } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-functions.js"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHMPzqBiDTGmOA1T2DavAaludCOiPb2Qk",
    authDomain: "light-area-ee9d2.firebaseapp.com",
    databaseURL: "https://light-area-ee9d2-default-rtdb.firebaseio.com",
    projectId: "light-area-ee9d2",
    storageBucket: "light-area-ee9d2.appspot.com",
    messagingSenderId: "327935716338",
    appId: "1:327935716338:web:712ee051f28488a3ce196b",
    measurementId: "G-EM9YV97BK7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage();
const database = getDatabase(app);
const functions = getFunctions();


function retrivequiers(queryy) {
    async function geta() {

        let arr = []
        const querySnapshott = await getDocs(queryy);
        querySnapshott.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

            arr.push(doc.data());
        });
        return arr;
    }
    function getb() {
        return new Promise(function (resolve) {
            resolve(geta());
        });
    };

    return getb();
}

function userUid() {
    return new Promise((resolve, reject) => {
        const userr = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User

                const uidd = user.uid;
                //////console.log(uidd);
                resolve(uidd);
            } else {
                // User is signed out
                alert("الرجاء قم بتسجيل الدخول مره اخري");
                location.replace("../Login.html");

            }
            userr();
        });
    })

}
const user_uid = await userUid();

//chart 
async function firsttimechart() {
    var date = getPreviousDay(1)

    var data = await getChart(date);
    var subs = [];
    var dates = [];
    data.forEach((doc) => {
        var time = (doc.date.seconds) * 1000;
        time = new Date(time);
        subs.push(doc.daySubs)
        dates.push(time.toLocaleDateString("en-US"))
    });
    const chart = Highcharts.chart('chart', {
        chart: {
            type: 'areaspline',

        },
        title: {
            text: 'Total subscrptions'
        },

        xAxis: {
            categories: dates,

        },
        yAxis: {
            title: {
                text: 'Subs'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' Subscribers'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0
            }
        },
        series: [{
            name: 'Date',
            data: subs,
        }]
    });
}
firsttimechart();
async function getChart(from) {
    return new Promise((resolve, reject) => {
        const query2 = query(collection(db, "users", user_uid, "statics"), orderBy("date", "desc")
            , where("date", ">=", from)
            , where("date", "<=", new Date()));
        var data = retrivequiers(query2)

        resolve(data);
    })
}

document.getElementById('chartSelect').addEventListener('change', async function () {
    var date = getPreviousDay(this.value)

    var data = await getChart(date);
    var subs = [];
    var dates = [];
    data.forEach((doc) => {
        var time = (doc.date.seconds) * 1000;
        time = new Date(time);
        subs.push(doc.daySubs)
        dates.push(time.toLocaleDateString("en-US"))
    });
    const chart = Highcharts.chart('chart', {
        chart: {
            type: 'areaspline',

        },
        title: {
            text: 'Total subscrptions'
        },

        xAxis: {
            categories: dates,

        },
        yAxis: {
            title: {
                text: 'Subs'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' Subscribers'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0
            }
        },
        series: [{
            name: 'Date',
            data: subs,
        }]
    });
});
function getPreviousDay(day) {
    var date = new Date()

    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - day);

    return previous;
}
