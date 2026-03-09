"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react";

interface CustomAudioPlayerProps {
    src: string;
    variant?: "compact" | "full";
}

export default function CustomAudioPlayer({ src, variant = "full" }: CustomAudioPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [playbackRate, setPlaybackRate] = useState(1);
    
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const setAudioData = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime);
        };

        const setAudioTime = () => setCurrentTime(audio.currentTime);
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener("loadeddata", setAudioData);
        audio.addEventListener("timeupdate", setAudioTime);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("loadeddata", setAudioData);
            audio.removeEventListener("timeupdate", setAudioTime);
            audio.removeEventListener("ended", handleEnded);
        };
    }, []);

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    };

    const changeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.currentTime = Number(e.target.value);
        setCurrentTime(audio.currentTime);
    };

    const toggleMute = () => {
        const prevMuted = isMuted;
        setIsMuted(!prevMuted);
        if (audioRef.current) {
            audioRef.current.muted = !prevMuted;
        }
    };

    const changePlaybackRate = () => {
        const rates = [1, 1.25, 1.5, 2, 0.75];
        const currentIndex = rates.indexOf(playbackRate);
        const nextIndex = (currentIndex + 1) % rates.length;
        const nextRate = rates[nextIndex];
        setPlaybackRate(nextRate);
        if (audioRef.current) {
            audioRef.current.playbackRate = nextRate;
        }
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    if (variant === "compact") {
        return (
            <div className="flex items-center gap-3 bg-emerald-500/5 dark:bg-emerald-400/5 p-2.5 pr-4 rounded-2xl border border-emerald-500/10 w-full group hover:border-emerald-500/30 transition-all duration-300 ltr-force">
                <audio ref={audioRef} src={src} preload="metadata" />
                
                <button 
                    onClick={togglePlayPause}
                    className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-90 shrink-0 cursor-pointer"
                >
                    {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
                </button>

                <div className="flex-1 flex flex-col gap-1 min-w-0 ltr-force">
                    <div className="relative w-full flex items-center h-2">
                        <input
                            type="range"
                            ref={progressBarRef}
                            value={currentTime}
                            max={duration || 0}
                            onChange={changeRange}
                            className="absolute inset-0 w-full h-1 bg-emerald-200/30 dark:bg-emerald-800/30 rounded-full appearance-none cursor-pointer accent-emerald-600"
                        />
                    </div>
                    <div className="flex justify-between items-center text-[8px] font-black text-emerald-900/40 dark:text-emerald-100/30 tracking-widest uppercase tabular-nums">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                <button 
                    onClick={changePlaybackRate}
                    className="h-7 px-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black hover:bg-emerald-500/20 transition-colors shrink-0 tabular-nums border border-emerald-500/10"
                >
                    {playbackRate}x
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-6 sm:p-8 border border-emerald-500/10 shadow-xl w-full relative overflow-hidden group ltr-force">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <audio ref={audioRef} src={src} preload="metadata" />
            
            <div className="flex flex-col gap-6 sm:gap-8 relative z-10">
                {/* Progress Bar */}
                <div className="space-y-3 ltr-force">
                    <div className="relative h-2 w-full flex items-center">
                        <input
                            type="range"
                            ref={progressBarRef}
                            value={currentTime}
                            max={duration || 0}
                            onChange={changeRange}
                            className="w-full h-2 bg-zinc-100 dark:bg-zinc-800/50 rounded-full appearance-none cursor-pointer accent-emerald-600"
                        />
                    </div>
                    <div className="flex justify-between text-xs font-black text-emerald-950/40 dark:text-white/30 tracking-widest tabular-nums">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 ltr-force">
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => { if (audioRef.current) audioRef.current.currentTime = 0; }}
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all active:scale-95"
                            title="Redémarrer"
                        >
                            <RotateCcw size={20} />
                        </button>
                        <button 
                            onClick={changePlaybackRate}
                            className="h-10 px-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-black hover:bg-emerald-500/20 transition-all border border-emerald-500/10 tabular-nums active:scale-95"
                        >
                            {playbackRate}x
                        </button>
                    </div>

                    <button 
                        onClick={togglePlayPause}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-[1.25rem] sm:rounded-[1.5rem] bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/40 active:scale-90"
                    >
                        {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
                    </button>

                    <button 
                        onClick={toggleMute}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all active:scale-95"
                    >
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                </div>
            </div>
            <style jsx>{`
                .ltr-force {
                    direction: ltr !important;
                }
            `}</style>
        </div>
    );
}
