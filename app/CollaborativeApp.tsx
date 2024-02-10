"use client";

import { useOthers } from "../liveblocks.config";

export function CollaborativeApp(){
    const others = useOthers();
    const userCount = others.length;
    return <div>{userCount} other user(s) online</div>

}