import { Audio } from "expo-av";

export default () => {
    let record;
    let sound = new Audio.Sound();
    let URI;
    let running = false;
    
    return {
        start: async () => {
            try {
                record = new Audio.Recording();
                await record.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
                running = true;
                await record.startAsync();
                console.log("STAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArt");
                URI = record.getURI();
                await sound.loadAsync({uri: URI});
                console.log(URI);
                return URI;
            } catch (error) {
                console.log(error);
            }
        },

        stop: async () => {
            try {
                running && await record.stopAndUnloadAsync();
                running = false;
            } catch (error) {
                console.log(error);
            }
        },

        play: async () => {
            try {
                console.log(URI);
                await sound.playAsync();
                console.log("PEZO TAFTOXRONA???")
            } catch (error) {
                console.log(error);
            }
        }
    }
};
