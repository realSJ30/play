import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadSongUrl = (song: Song) => {
  /** note: you can use the useSupabaseClient directly if the data
   * we are fetching or interacting doesnt need authentication
   * we use the useSessionContext if we need the authentication
   * e.g for storing specific data(song) we need to add the authenticated
   * user as reference to the song table thats why we need the session
   */
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return "";
  }

  const { data: songData } = supabaseClient.storage
    .from("songs")
    .getPublicUrl(song.song_path);

  return songData.publicUrl;
};

export default useLoadSongUrl;
