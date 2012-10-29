smartos-ancestry
================

Show the "ancestry" if installed VM:s. Like so:

```
[root@00-25-90-38-94-04 ~]# vmadm list
UUID                                  TYPE  RAM      STATE             ALIAS
183b9ce8-38c6-460b-a5d1-9bb139be0f34  OS    1024     running           zcube
73667e3a-8a6e-45a7-8986-09431b68268d  OS    1024     stopped           zdjango
8061c37a-5ec3-47e8-80d7-da9fa204fde1  OS    1024     running           zmailbk
b2535e73-0892-4183-9e02-0255c6dde661  OS    1024     running           zbackup
ba1f8d92-2ca2-4f01-9939-fa2de11a535e  OS    1024     running           zlogin
e39c6382-3c22-4896-95b7-3e6515a6b26e  OS    1024     running           zpuppet
0d6e2251-aa11-452b-afb7-e43c8e7bfe1c  KVM   2048     running           udev
2828fed8-bc9e-4bb1-b165-be3534d93e19  KVM   2048     stopped           jenkins
7dc0f886-5faa-4534-a68e-8277e167464e  KVM   2048     running           psm
9cebcdfe-dc65-4d08-890e-c286e407fa0f  KVM   2048     stopped           winsrv
0f5af601-51c1-4784-8d44-2ee86d36c8d2  OS    32768    running           zbuilder
[root@00-25-90-38-94-04 ~]# ancestry 
zcube            sdc:sdc:standard64:1.0.1
zdjango          sdc:sdc:standard64:1.0.7
zmailbk          sdc:sdc:standard64:1.0.1
zbackup          sdc:sdc:smartos64:1.6.3
zlogin           sdc:sdc:standard64:1.0.4
zpuppet          sdc:sdc:standard64:1.0.7
udev             smartos:nym:ubuntu64:12.4.1
jenkins          smartos:nym:ubuntu64:12.4.1
psm              <Unknown>
winsrv           <Unknown>
zbuilder         sdc:sdc:smartos:1.6.3
```

Installing
----------

Drop `bin/*` (script + `node_modules`) into `/opt/local/bin`. Enjoy.

License
-------

MIT

