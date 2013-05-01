smartos-ancestry
================

Show the "ancestry" of installed VM:s, i.e. what image they are based on. This
can be useful when wondering what old images can be removed from a host or what
VM:s should be upgraded/migrated. Like so:

```
[root@anto ~]# ancestry
Usage:
  ancestry -v  # Display VMs and their base
  ancestry -i  # Display images and their usage count
  ancestry -u  # Update ancestry script to latest version
[root@anto ~]# ancestry -v
UUID                                  ALIAS         IMAGE             VERSION
0d6e2251-aa11-452b-afb7-e43c8e7bfe1c  plex          ubuntu64          12.4.1
1ad4435d-f4bd-49fd-826d-cb53d84d619d  zedspoller    base64            13.1.0
1bbb6dd3-6abd-47b9-8485-a7afe0b727d5  zafps         standard64        1.0.7
26e1b6d2-57e4-4ba5-9683-a727795f039f  safe          ubuntu64          12.4.1
3a40d75f-7a2a-4b54-ad99-7d0ece1401bb  zsmb          standard64        1.0.7
556004f2-36ec-4483-8e1e-5af188f0db7c  unifi         ubuntu64          12.4.1
5e699ceb-37e0-431d-9b8e-c2eab61e8d75  zlogin2       base64            13.1.0
7dc0f886-5faa-4534-a68e-8277e167464e  psm           -                 -
8061c37a-5ec3-47e8-80d7-da9fa204fde1  zmailbk       standard64        1.0.1
81035ab6-9827-448d-9208-87eeb7d35891  dropbox       ubuntu64          12.4.1
a05f3f8c-98c2-4558-8efe-5a2f01d80143  git           base64            13.1.0
b2535e73-0892-4183-9e02-0255c6dde661  zbackup       smartos64         1.6.3
e39c6382-3c22-4896-95b7-3e6515a6b26e  zpuppet       standard64        1.0.7
[root@anto ~]# ancestry -i
UUID                                  NAME          VERSION           USAGE
1328ad4c-15a4-11e2-af95-efc2324aa342  ubuntu64      12.4.1            4
9551fdbc-cc9a-11e1-a9e7-eb1e788a8690  standard64    1.0.1             1
9eac5c0c-a941-11e2-a7dc-57a6b041988f  base64        13.1.0            3
a0f8cf30-f2ea-11e1-8a51-5793736be67c  standard64    1.0.7             3
f669428c-a939-11e2-a485-b790efc0f0c1  base          13.1.0            0
f9e4be48-9466-11e1-bc41-9f993f5dff36  smartos64     1.6.3             1
[root@anto ~]#
```

Installing
----------

```
curl -k https://raw.github.com/calmh/smartos-ancestry/master/ancestry \
   > /opt/local/bin/ancestry \
   && chmod 755 /opt/local/bin/ancestry
```

Once installed, you can use `ancestry -u` to update to the latest version.

Bugs and Limitations
--------------------

See the [issue tracker](https://github.com/calmh/smartos-ancestry/issues)

License
-------

MIT

