import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import speakers from './speakers';
import transcripts from './transcripts';

ReactDOM.render(<App />, document.getElementById('root'));

function findSpeakerName(speakerId) {
  const speaker = speakers.find((speaker) => speaker.id === speakerId);
  return speaker?.name ?? 'Unknown Speaker';
}

for (const transcript of transcripts) {
  const speakerNames = transcript.speakerIds.map(findSpeakerName).join(', ');
  console.log(`${speakerNames}:`, transcript.text);
}
