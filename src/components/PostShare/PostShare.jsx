import React, {useState, useRef} from 'react'
import ProfileImage from '../../img/profileImage.png'
import './PostShare.css'
import {UilScenery} from '@iconscout/react-unicons';
import {UilPlayCircle} from '@iconscout/react-unicons';
import {uilLocationPoint} from '@iconscout/react-unicons';
import{UilSchedule} from '@iconscout/react-unicons';
import{UilTimes} from '@iconscout/react-unicons';
import ShareModal from '../ShareModal/ShareModal';

const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange =(event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    }

    const [modalOpened, setModalOpened] = useState(false)

    return (
        <div className="PostShare">
            <img src={ProfileImage} alt=""/>
            <div>
                <input type="text" placeholder="What's happening" />
                <div className="postOptions">
                    <div className="option"
                    style={{color: 'var(--photo)'}}
                    onClick={()=>imageRef.current.click()}
                    >
                        <UilScenery/>
                        Photo
                    </div>
                    <div className="option"
                    style={{color: 'var(--video)'}}
                    onClick={()=>imageRef.current.click()}
                    >
                        <UilPlayCircle/>
                        Video
                    </div>
                    <div className="option"
                    style={{color: 'var(--location)'}}
                    >
                        <uilLocationPoint/>
                        Location
                    </div>
                    <div className="option"
                    style={{color: 'var(--shedule)'}}
                    >
                        <UilSchedule/>
                        Schedule
                    </div>
                    <button className='button ps-button' onClick={()=>setModalOpened(true)}>
                        Share
                    </button>
                    <ShareModal modalOpened={modalOpened}  setModalOpened={setModalOpened}/>
                    <div style={{display: "none"}}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && 
                    <div className="previewImage">
                        <UilTimes onClick={()=>setImage(null)}/>
                        <img src={image.image} alt=""/>
                    </div>
                }

            </div>
        </div>
    );
};

export default PostShare
