smartos-ancestry
================

Show the "ancestry" of installed VM:s, i.e. what image they are based on. This
can be useful when wondering what old images can be removed from a host or what
VM:s should be upgraded/migrated. Like so:

```
[root@anto ~]# vmadm list
UUID                                  TYPE  RAM      STATE             ALIAS
81035ab6-9827-448d-9208-87eeb7d35891  KVM   256      running           dropbox
0d6e2251-aa11-452b-afb7-e43c8e7bfe1c  KVM   512      running           plex
183b9ce8-38c6-460b-a5d1-9bb139be0f34  OS    512      running           zcube
1bbb6dd3-6abd-47b9-8485-a7afe0b727d5  OS    512      running           zafps
8061c37a-5ec3-47e8-80d7-da9fa204fde1  OS    512      running           zmailbk
8491ba2d-1ffc-4219-879d-d8f7384780d9  KVM   512      running           zabbix
b2535e73-0892-4183-9e02-0255c6dde661  OS    512      running           zbackup
ba1f8d92-2ca2-4f01-9939-fa2de11a535e  OS    512      running           zlogin
e39c6382-3c22-4896-95b7-3e6515a6b26e  OS    512      running           zpuppet
556004f2-36ec-4483-8e1e-5af188f0db7c  KVM   768      running           unifi
f993583b-2a17-4751-948d-b454f6ba720f  KVM   768      running           gitlab
7dc0f886-5faa-4534-a68e-8277e167464e  KVM   2048     running           psm
bc3d93e3-ee95-471a-8341-02881794fcfa  OS    32768    stopped           zbuilder
[root@anto ~]# ancestry
UUID                                  ALIAS             IMAGE                           PUBLISHED
81035ab6-9827-448d-9208-87eeb7d35891  dropbox           smartos:nym:ubuntu64:12.4.1     2012-10-14
0d6e2251-aa11-452b-afb7-e43c8e7bfe1c  plex              smartos:nym:ubuntu64:12.4.1     2012-10-14
183b9ce8-38c6-460b-a5d1-9bb139be0f34  zcube             sdc:sdc:standard64:1.0.1        2012-07-13
1bbb6dd3-6abd-47b9-8485-a7afe0b727d5  zafps             sdc:sdc:standard64:1.0.7        2012-08-30
8061c37a-5ec3-47e8-80d7-da9fa204fde1  zmailbk           sdc:sdc:standard64:1.0.1        2012-07-13
8491ba2d-1ffc-4219-879d-d8f7384780d9  zabbix            -                               -
b2535e73-0892-4183-9e02-0255c6dde661  zbackup           sdc:sdc:smartos64:1.6.3         2012-05-02
ba1f8d92-2ca2-4f01-9939-fa2de11a535e  zlogin            sdc:sdc:standard64:1.0.4        2012-07-30
e39c6382-3c22-4896-95b7-3e6515a6b26e  zpuppet           sdc:sdc:standard64:1.0.7        2012-08-30
556004f2-36ec-4483-8e1e-5af188f0db7c  unifi             smartos:nym:ubuntu64:12.4.1     2012-10-14
f993583b-2a17-4751-948d-b454f6ba720f  gitlab            smartos:nym:ubuntu64:12.4.1     2012-10-14
7dc0f886-5faa-4534-a68e-8277e167464e  psm               -                               -
bc3d93e3-ee95-471a-8341-02881794fcfa  zbuilder          sdc:sdc:smartos:1.6.3           2012-05-02
[root@anto ~]#
```

```
[root@anto ~]# ancestry  -t
sdc:sdc:standard64:1.0.7 (2012-08-30)
├╴zafps (1bbb6dd3-6abd-47b9-8485-a7afe0b727d5)
└╴zpuppet (e39c6382-3c22-4896-95b7-3e6515a6b26e)

sdc:sdc:standard64:1.0.1 (2012-07-13)
├╴zcube (183b9ce8-38c6-460b-a5d1-9bb139be0f34)
└╴zmailbk (8061c37a-5ec3-47e8-80d7-da9fa204fde1)

sdc:sdc:standard64:1.0.4 (2012-07-30)
└╴zlogin (ba1f8d92-2ca2-4f01-9939-fa2de11a535e)

sdc:sdc:smartos:1.6.3 (2012-05-02)
└╴zbuilder (bc3d93e3-ee95-471a-8341-02881794fcfa)

smartos:nym:ubuntu64:12.4.1 (2012-10-14)
├╴dropbox (81035ab6-9827-448d-9208-87eeb7d35891)
├╴plex (0d6e2251-aa11-452b-afb7-e43c8e7bfe1c)
├╴unifi (556004f2-36ec-4483-8e1e-5af188f0db7c)
└╴gitlab (f993583b-2a17-4751-948d-b454f6ba720f)

sdc:sdc:smartos64:1.6.3 (2012-05-02)
└╴zbackup (b2535e73-0892-4183-9e02-0255c6dde661)

(no image)
├╴zabbix (8491ba2d-1ffc-4219-879d-d8f7384780d9)
└╴psm (7dc0f886-5faa-4534-a68e-8277e167464e)
```

Installing
----------

Drop the `ancestry` script into `/opt/local/bin` on the GZ. Enjoy.

Bugs and Limitations
--------------------

See the [issue tracker](https://github.com/calmh/smartos-ancestry/issues)

License
-------

MIT

