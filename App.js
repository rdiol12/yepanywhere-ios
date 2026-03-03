import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRef } from 'react';

const YEPANYWHERE_URL = 'http://100.115.197.11:3400';

export default function App() {
  const webviewRef = useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar style="light" hidden />
      <WebView
        ref={webviewRef}
        source={{ uri: YEPANYWHERE_URL }}
        style={styles.webview}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        renderLoading={() => (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )}
        onError={() => webviewRef.current?.reload()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
  },
});
