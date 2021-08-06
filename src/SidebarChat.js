import React from 'react'
import { Avatar } from "@material-ui/core";
import './SidebarChat.css';
import {useState, useEffect} from 'react';
import db from "./firebase.js"
import {Link} from 'react-router-dom';

function SidebarChat({ id,name,addNewChat }) {
    const [seed, setSeed] = useState('');
    const [messages,setMessages] = useState("");

    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ))
        }
    },[id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat room");

        if(roomName){
            // do something 
            db.collection("rooms").add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`} key={id}>
            <div className = 'sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className = "sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message.slice(0,20)}</p>
                </div>
            </div>
        </Link>
          
    ) : (
        <div onClick = {createChat} className="sidebarChat addNewChat">
            <h2> Add New Chat</h2>
        </div>
    );
}

export default SidebarChat
