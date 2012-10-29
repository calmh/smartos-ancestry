smartos-ancestry
================

Show the "ancestry" of installed VM:s, i.e. what image they are based on. This
can be useful when wondering what old images can be removed from a host or what
VM:s should be upgraded/migrated. Like so:

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
UUID                                  ALIAS            IMAGE
0d6e2251-aa11-452b-afb7-e43c8e7bfe1c  udev             smartos:nym:ubuntu64:12.4.1
0f5af601-51c1-4784-8d44-2ee86d36c8d2  zbuilder         sdc:sdc:smartos:1.6.3
183b9ce8-38c6-460b-a5d1-9bb139be0f34  zcube            sdc:sdc:standard64:1.0.1
2828fed8-bc9e-4bb1-b165-be3534d93e19  jenkins          smartos:nym:ubuntu64:12.4.1
73667e3a-8a6e-45a7-8986-09431b68268d  zdjango          sdc:sdc:standard64:1.0.7
7dc0f886-5faa-4534-a68e-8277e167464e  psm              <Unknown>
8061c37a-5ec3-47e8-80d7-da9fa204fde1  zmailbk          sdc:sdc:standard64:1.0.1
9cebcdfe-dc65-4d08-890e-c286e407fa0f  winsrv           <Unknown>
b2535e73-0892-4183-9e02-0255c6dde661  zbackup          sdc:sdc:smartos64:1.6.3
ba1f8d92-2ca2-4f01-9939-fa2de11a535e  zlogin           sdc:sdc:standard64:1.0.4
e39c6382-3c22-4896-95b7-3e6515a6b26e  zpuppet          sdc:sdc:standard64:1.0.7
```

Installing
----------

Drop the `ancestry` script into `/opt/local/bin`. Enjoy.

Bugs and Limitations
--------------------

See the [issue tracker](https://github.com/calmh/smartos-ancestry/issues)

License
-------

MIT

