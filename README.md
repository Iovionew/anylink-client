## AnyLink Secure Client

This is an SSL VPN client that supports OpenConnect or Cisco's AnyConnect [SSL VPN Protocol](https://datatracker.ietf.org/doc/html/draft-mavrogiannopoulos-openconnect-03).  It use [sslcon](https://github.com/tlslink/sslcon) as the core to communicate with the server.

Currently the following servers are supported,

- [AnyLink](https://github.com/bjdgyc/anylink)
- [OpenConnect VPN server](https://gitlab.com/openconnect/ocserv)

> This software can save passwords(optional) in the Keychain of the operating system, but you should evaluate whether your usage scenarios allow saving passwords and avoid potential security risks.
>

## Screenshot

<img src="./images/screenshot.png" alt="screenshot" width=70% />

## Download

Download from [Releases](https://github.com/tlslink/anylink-client/releases) Or fork this project and compile it using [github action](https://github.com/tlslink/anylink-client/blob/main/.github/workflows/release.yml)

If you are using GitHub Actions for compilation, you must either comment out the macOS platform or have an Apple Developer account and configure the relevant environment variables. Please refer to the following information.

- [import-codesign-certs](https://github.com/apple-actions/import-codesign-certs)
- [notary-tools](https://github.com/GuillaumeFalourd/notary-tools)

### Windows

Please use Windows 10 or newer.

### macOS

Starting from version v0.9.6, only the Apple Silicon platform is supported, and the application is digitally signed and notarized by Apple.

Just double-click the installer to install the app. During the installation process, you need to grant permissions to the software.

### Linux

You should use `anylink-linux-amd64.tar.gz` with Ubuntu 22.04 or newer.

```bash
tar -zxvf anylink-*.tar.gz
```

Double-click the `.run` file to install the software. The `.run` package is supposed to support other Linux distributions like RedHat, however, you may need to follow the prompts to install some dependencies.

## UnInstall

Enter the installation directory and execute the uninstall program.

## Help

| You may want to join in the QQ Group(66899589) to get some help. |
| :----------------------------------------------------------: |
|           ![](./images/qqgroup.png)                   |
