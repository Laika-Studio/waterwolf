var regedit = require('regedit')

var installPath = process.execPath

var keysToCreate = [
  'HKCU\\Software\\Classes\\WaterWolf',
  'HKCU\\Software\\Classes\\WaterWolf\\Application',
  'HKCU\\Software\\Classes\\WaterWolf\\DefaulIcon',
  'HKCU\\Software\\Classes\\WaterWolf\\shell\\open\\command',
  'HKCU\\Software\\Clients\\StartMenuInternet\\WaterWolf\\Capabilities\\FileAssociations',
  'HKCU\\Software\\Clients\\StartMenuInternet\\WaterWolf\\Capabilities\\StartMenu',
  'HKCU\\Software\\Clients\\StartMenuInternet\\WaterWolf\\Capabilities\\URLAssociations',
  'HKCU\\Software\\Clients\\StartMenuInternet\\WaterWolf\\DefaultIcon',
  'HKCU\\Software\\Clients\\StartMenuInternet\\WaterWolf\\InstallInfo',
  'HKCU\\Software\\Clients\\StartMenuInternet\\WaterWolf\\shell\\open\\command'
]

var registryConfig = {
  'HKCU\\Software\\RegisteredApplications': {
    WaterWolf: {
      value: 'Software\\Clients\\StartMenuInternet\\WaterWolf\\Capabilities',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\WaterWolf': {
    default: {
      value: 'WaterWolf Browser Document',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Classes\\WaterWolf\\Application': {
    ApplicationIcon: {
      value: installPath + ',0',
      type: 'REG_SZ'
    },
    ApplicationName: {
      value: 'WaterWolf',
      type: 'REG_SZ'
    },
    AppUserModelId: {
      value: 'WaterWolf',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\WaterWolf\\DefaulIcon': {
    ApplicationIcon: {
      value: installPath + ',0',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\WaterWolf\\shell\\open\\command': {
    default: {
      value: '"' + installPath + '" "%1"',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Classes\\.htm\\OpenWithProgIds': {
    WaterWolf: {
      value: 'Empty',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\.html\\OpenWithProgIds': {
    WaterWolf: {
      value: 'Empty',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\WaterWolf\\Capabilities\\FileAssociations': {
    '.htm': {
      value: 'WaterWolf',
      type: 'REG_SZ'
    },
    '.html': {
      value: 'WaterWolf',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\WaterWolf\\Capabilities\\StartMenu': {
    StartMenuInternet: {
      value: 'WaterWolf',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\WaterWolf\\Capabilities\\URLAssociations': {
    http: {
      value: 'WaterWolf',
      type: 'REG_SZ'
    },
    https: {
      value: 'WaterWolf',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\WaterWolf\\DefaultIcon': {
    default: {
      value: installPath + ',0',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\WaterWolf\\InstallInfo': {
    IconsVisible: {
      value: 1,
      type: 'REG_DWORD'
    }
  },
  'HKCU\\Software\\Clients\\StartMenuInternet\\WaterWolf\\shell\\open\\command': {
    default: {
      value: installPath,
      type: 'REG_DEFAULT'
    }
  }
}

var registryInstaller = {
  install: function () {
    return new Promise(function (resolve, reject) {
      regedit.createKey(keysToCreate, function (err) {
        regedit.putValue(registryConfig, function (err) {
          if (err) {
            reject()
          } else {
            resolve()
          }
        })
      })
    })
  },
  uninstall: function () {
    return new Promise(function (resolve, reject) {
      regedit.deleteKey(keysToCreate, function (err) {
        if (err) {
          reject()
        } else {
          resolve()
        }
      })
    })
  }
}
