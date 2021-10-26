import SyncStorage from 'sync-storage';

export class User {
  async getXDeviceId() {
    await SyncStorage.init();
    const XDeviceId = await SyncStorage.get('XDeviceId');
    return XDeviceId;
  }

  async getXactionToken() {
    await SyncStorage.init();
    const xtoken = SyncStorage.get('XactionToken');
    return xtoken;
  }

  getUserId() {
    return SyncStorage.get("userId");
  }

  getuserName() {
    return SyncStorage.get('userName');
  }

  clearAllUserData() {
    SyncStorage.set('XDeviceId', null);
    SyncStorage.set('XactionToken', null);
    SyncStorage.set('userId', null);
    SyncStorage.set('userName', null);
  }
}