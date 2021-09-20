// import React, { useState, useEffect } from 'react'
// import SearchBar from '../components/SearchBar.js'
// import TrackList from '../components/TrackList.js'
// import axios from 'axios'
// const HomeScreen2 = (props) => {
//   const [input, setInput] = useState('')
//   const [trackListDefault, setTrackListDefault] = useState()
//   const [trackList, setTrackList] = useState()

//   const fetchData = async () => {
//     // return await fetch('/api/tracks')
//     //   .then((response) => response.json())
//     //   .then((data) => {
//     //     setTrackList(data)
//     //     setTrackListDefault(data)
//     //   })

//     const { data } = await axios.get('/api/tracks/')
//     setTrackList(data)
//     setTrackListDefault(data)
//   }

//   const updateInput = async (input) => {
//     const filtered = trackListDefault.filter((track) => {
//       return track.name.toLowerCase().includes(input.toLowerCase())
//     })
//     setInput(input)
//     setTrackList(filtered)
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <>
//       <h1>Track List</h1>
//       <SearchBar input={input} onChange={updateInput} />
//       <TrackList trackList={trackList} />
//     </>
//   )
// }

// export default HomeScreen2
