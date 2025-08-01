"use client"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Star,
  X,
  Globe,
  Search,
  Bell,
  Video,
  User,
  ThumbsUp,
  MessageCircle,
  Share,
  Download,
} from "lucide-react"
import styles from "./YouTubeBrowser.module.css"

export default function YouTubeBrowser() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const browserContentRef = useRef(null)

  // Simulate loading
  setTimeout(() => {
    setIsLoading(false)
  }, 1000)

  const videos = [
    {
      id: 1,
      title: "Quantum Error Correction Explained - Surface Codes Tutorial",
      channel: "IngMuyleang",
      views: "15K views",
      time: "3 days ago",
      duration: "28:45",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 2,
      title: "Building Quantum Machine Learning Models with Qiskit",
      channel: "IngMuyleang",
      views: "22K views",
      time: "1 week ago",
      duration: "35:12",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 3,
      title: "Khmer Language Processing with Quantum NLP - Complete Guide",
      channel: "IngMuyleang",
      views: "8.5K views",
      time: "2 weeks ago",
      duration: "42:30",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 4,
      title: "Quantum Cryptography: BB84 Protocol Implementation",
      channel: "IngMuyleang",
      views: "18K views",
      time: "3 weeks ago",
      duration: "31:18",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 5,
      title: "QAOA for Supply Chain Optimization - Real World Application",
      channel: "IngMuyleang",
      views: "12K views",
      time: "1 month ago",
      duration: "38:22",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
    {
      id: 6,
      title: "Quantum Computing Education Platform Demo - Interactive Learning",
      channel: "IngMuyleang",
      views: "25K views",
      time: "1 month ago",
      duration: "24:15",
      thumbnail: "/placeholder.svg?height=180&width=320",
    },
  ]

  return (
    <div className={styles.browser} onClick={(e) => e.stopPropagation()}>
      <div className={styles.toolbar}>
        <div className={styles.tabBar}>
          <div className={styles.tab}>
            <div className={styles.favicon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  fill="#FF0000"
                />
              </svg>
            </div>
            <span className={styles.tabTitle}>YouTube - IngMuyleang Channel</span>
            <X size={14} className={styles.closeTab} onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      </div>

      <div className={styles.addressBar}>
        <div className={styles.navigationButtons}>
          <button className={styles.navButton}>
            <ArrowLeft size={16} />
          </button>
          <button className={styles.navButton}>
            <ArrowRight size={16} />
          </button>
          <button className={styles.navButton}>
            <RotateCcw size={16} />
          </button>
        </div>

        <div className={styles.urlBar}>
          <Globe size={14} className={styles.urlIcon} />
          <span className={styles.urlText}>youtube.com/@muyleanging</span>
        </div>

        <div className={styles.browserActions}>
          <button className={styles.actionButton}>
            <Star size={16} />
          </button>
        </div>
      </div>

      <div ref={browserContentRef} className={styles.browserContent}>
        {isLoading ? (
          <div className={styles.loadingIndicator}>
            <motion.div
              className={styles.loadingBar}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            />
          </div>
        ) : (
          <div className={styles.youtubeContent}>
            {/* YouTube Header */}
            <div className={styles.youtubeHeader}>
              <div className={styles.youtubeNav}>
                <div className={styles.youtubeLogo}>
                  <svg width="90" height="20" viewBox="0 0 90 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5701 5.35042 27.9727 3.12324Z"
                      fill="#FF0000"
                    />
                    <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" />
                  </svg>
                  <span>YouTube</span>
                </div>

                <div className={styles.searchContainer}>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                  />
                  <button className={styles.searchButton}>
                    <Search size={20} />
                  </button>
                </div>

                <div className={styles.userActions}>
                  <button className={styles.iconButton}>
                    <Video size={24} />
                  </button>
                  <button className={styles.iconButton}>
                    <Bell size={24} />
                  </button>
                  <button className={styles.iconButton}>
                    <User size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Channel Header */}
            <div className={styles.channelHeader}>
              <div className={styles.channelBanner}>
                <img src="/placeholder.svg?height=200&width=1200" alt="Channel Banner" />
              </div>
              <div className={styles.channelInfo}>
                <div className={styles.channelAvatar}>
                  <img src="/placeholder.svg?height=80&width=80" alt="Channel Avatar" />
                </div>
                <div className={styles.channelDetails}>
                  <h1>IngMuyleang</h1>
                  <p>@muyleanging • 5.2K subscribers • 45 videos</p>
                  <p>
                    Quantum Computing Researcher & AI Convergence Student at PKNU. Sharing tutorials on quantum error
                    correction, quantum machine learning, and quantum programming. Making quantum computing accessible
                    to everyone! 🇰🇭🇰🇷
                  </p>
                  <button className={styles.subscribeButton}>Subscribe</button>
                </div>
              </div>
            </div>

            {/* Videos Grid */}
            <div className={styles.videosSection}>
              <div className={styles.sectionHeader}>
                <h2>Latest Videos - Quantum Computing & Research</h2>
              </div>
              <div className={styles.videosGrid}>
                {videos.map((video) => (
                  <div key={video.id} className={styles.videoCard}>
                    <div className={styles.videoThumbnail}>
                      <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} />
                      <span className={styles.videoDuration}>{video.duration}</span>
                    </div>
                    <div className={styles.videoInfo}>
                      <h3>{video.title}</h3>
                      <p className={styles.videoMeta}>
                        {video.views} • {video.time}
                      </p>
                      <div className={styles.videoActions}>
                        <button className={styles.actionBtn}>
                          <ThumbsUp size={16} />
                        </button>
                        <button className={styles.actionBtn}>
                          <MessageCircle size={16} />
                        </button>
                        <button className={styles.actionBtn}>
                          <Share size={16} />
                        </button>
                        <button className={styles.actionBtn}>
                          <Download size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
