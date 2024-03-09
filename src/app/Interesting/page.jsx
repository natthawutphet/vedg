"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';

// ตัวอย่าง metadata สามารถนำมาใช้หรือปรับเปลี่ยนตามที่ต้องการ
const pageMetadata = {
  title: "หน้านี้เป็นความรู้ดีดีแจกฟรี รับทำโฆษณาออนไลน์ Google,Facebookสายเทา",
  description: "หน้านี้เป็นความรู้ดีดีแจกฟรี",
};

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.service-ads.com/api');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <main className='container text-center'>
        <div className="card mb-3">
          {posts.map((post) => (
            <li key={post.id}>
              <h1>{post.title}</h1>
              {post.img ? (
                <div className="imgpost">
                  <img src={post.img} alt={post.title} style={{ width: '100%' }} />
                </div>
              ) : post.youtube ? (
                <div className="videopost">
                  <iframe
                

                    src={`https://www.youtube.com/embed/${post.youtube}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={post.title}
                  ></iframe>
                </div>
              ) : null}
              <h3 className='card-title'>{post.h_line}</h3>
              <p className='card-text'>{post.ppp}</p>
            </li>
          ))}
        </div>
        <hr className='hr'/>
      </main>
    </>
  );
}
