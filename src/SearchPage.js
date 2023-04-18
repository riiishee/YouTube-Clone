import React from 'react';
// import TuneOutlinedIcon from '@material-ui/icons/TuneOutlinedIcon';
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_filter'>
{/* <TuneOutlinedIcon /> */}
<h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow 
 image =" https://yt3.googleusercontent.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s176-c-k-c0x00ffffff-no-rj"
 channel="clever Progarmmer"
 verified
 sbubs={1.24} 
 noOfVideos={400}
 descroption="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."

      />
      <hr />
      <VideoRow
      views="1.4M"
      subs="659k"
      description="Build a Twitter App! This is the BEST tutorial to learn the basics of Solana Development! Made with a lot of ❤️" 
        timestamp="59 second ago"
        channel="clever programmer"
        title="Build Twitter Web3 Clone with React Native!"
        image="https://i.ytimg.com/vi/h1TKgCnWeT0/maxresdefault.jpg"
      />
        <VideoRow
      views="1.4M"
      subs="659k"
      description="Build a Twitter App! This is the BEST tutorial to learn the basics of Solana Development! Made with a lot of ❤️" 
        timestamp="59 second ago"
        channel="clever programmer"
        title="Build Twitter Web3 Clone with React Native!"
        image="https://i.ytimg.com/vi/h1TKgCnWeT0/maxresdefault.jpg"
      />
        <VideoRow
      views="1.4M"
      subs="659k"
      description="Build a Twitter App! This is the BEST tutorial to learn the basics of Solana Development! Made with a lot of ❤️" 
        timestamp="59 second ago"
        channel="clever programmer"
        title="Build Twitter Web3 Clone with React Native!"
        image="https://i.ytimg.com/vi/h1TKgCnWeT0/maxresdefault.jpg"
      />
        <VideoRow
      views="1.4M"
      subs="659k"
      description="Build a Twitter App! This is the BEST tutorial to learn the basics of Solana Development! Made with a lot of ❤️" 
        timestamp="59 second ago"
        channel="clever programmer"
        title="Build Twitter Web3 Clone with React Native!"
        image="https://i.ytimg.com/vi/h1TKgCnWeT0/maxresdefault.jpg"
      />
        <VideoRow
      views="1.4M"
      subs="659k"
      description="Build a Twitter App! This is the BEST tutorial to learn the basics of Solana Development! Made with a lot of ❤️" 
        timestamp="59 second ago"
        channel="clever programmer"
        title="Build Twitter Web3 Clone with React Native!"
        image="https://i.ytimg.com/vi/h1TKgCnWeT0/maxresdefault.jpg"
      />
        <VideoRow
      views="1.4M"
      subs="659k"
      description="Build a Twitter App! This is the BEST tutorial to learn the basics of Solana Development! Made with a lot of ❤️" 
        timestamp="59 second ago"
        channel="clever programmer"
        title="Build Twitter Web3 Clone with React Native!"
        image="https://i.ytimg.com/vi/h1TKgCnWeT0/maxresdefault.jpg"
      />
        <VideoRow
      views="1.4M"
      subs="659k"
      description="Build a Twitter App! This is the BEST tutorial to learn the basics of Solana Development! Made with a lot of ❤️" 
        timestamp="59 second ago"
        channel="clever programmer"
        title="Build Twitter Web3 Clone with React Native!"
        image="https://i.ytimg.com/vi/h1TKgCnWeT0/maxresdefault.jpg"
      />
    </div>
  )
}

export default SearchPage;
