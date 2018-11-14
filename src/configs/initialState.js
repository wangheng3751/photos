import photosState from '../modules/photos/photosState';

export default function getAppState () {
  const appState = {
    photos: new photosState()
    //...
  }
  return appState;
}