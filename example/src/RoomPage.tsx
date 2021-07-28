import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CreateAudioTrackOptions, createLocalAudioTrack, createLocalVideoTrack, CreateVideoTrackOptions, Room, RoomEvent, TrackPublishOptions, DataPacket_Kind, Participant } from 'livekit-client'
import { LiveKitRoom } from 'livekit-react'
import React, { useState } from "react"
import "react-aspect-ratio/aspect-ratio.css"
import { useHistory, useLocation } from 'react-router-dom'
import { useMousePosition } from "./useMousePosition"

export const RoomPage = () => {
  const [numParticipants, setNumParticipants] = useState(0)
  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const url = query.get('url')
  const token = query.get('token')
  const recorder = query.get('recorder')

  const position = useMousePosition();

  if (!url || !token) {
    return (
      <div>
        url and token are required
      </div>
    )
  }

  const onLeave = () => {
    history.push({
      pathname: '/',
    })
  }


  const updateParticipantSize = (room: Room) => {
    setNumParticipants(room.participants.size + 1);
  }

  const onParticipantDisconnected = (room: Room) => {
    updateParticipantSize(room)

    /* Special rule for recorder */
    if (recorder && parseInt(recorder, 10) === 1 && room.participants.size === 0) {
      console.log("END_RECORDING")
    }
  }

  return (
    <div className="roomContainer">
      <div className="topBar">
        <h1>
        bellFace LiveKit Video<br/>
        My cursor: {position.x}:{position.y}
        </h1>
        <div className="participantCount">
          <FontAwesomeIcon icon={faUserFriends} />
          <span>{numParticipants}</span>
        </div>
      </div>
      <LiveKitRoom
        url={url}
        token={token}
        onConnected={room => {
          onConnected(room, query);
          room.on(RoomEvent.ParticipantConnected, () => updateParticipantSize(room))
          room.on(RoomEvent.ParticipantDisconnected, () => onParticipantDisconnected(room))
          updateParticipantSize(room);
        }}
        onLeave={onLeave}
        adaptiveVideo={true}
      />
    </div>
  )
}

async function onConnected(room: Room, query: URLSearchParams) {
  // make it easier to debug
  (window as any).currentRoom = room;

  if (isSet(query, 'audioEnabled')) {
    const options: CreateAudioTrackOptions = {}
    const audioDeviceId = query.get('audioDeviceId');
    if (audioDeviceId) {
      options.deviceId = audioDeviceId;
    }
    const audioTrack = await createLocalAudioTrack(options)
    await room.localParticipant.publishTrack(audioTrack)
  }
  if (isSet(query, 'videoEnabled')) {
    const videoDeviceId = query.get('videoDeviceId');
    const captureOptions: CreateVideoTrackOptions = {}
    if (videoDeviceId) {
      captureOptions.deviceId = videoDeviceId;
    }
    const videoTrack = await createLocalVideoTrack(captureOptions);
    const publishOptions: TrackPublishOptions = {
      name: 'camera'
    }
    if (isSet(query, 'simulcast')) {
      publishOptions.simulcast = true
    }
    await room.localParticipant.publishTrack(videoTrack, publishOptions)
  }

  const strData = JSON.stringify({some: "data"})
  const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  const data = encoder.encode(strData);
  room.localParticipant.publishData(data, DataPacket_Kind.RELIABLE);

  room.on(RoomEvent.DataReceived, (payload: Uint8Array, participant: Participant, kind: DataPacket_Kind) => {
    const strData = decoder.decode(payload)

    console.log(strData);
    console.log(participant);
    console.log(kind);
  });
}

function isSet(query: URLSearchParams, key: string): boolean {
  return query.get(key) === '1' || query.get(key) === 'true'
}
