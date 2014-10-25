function FindProxyForURL(url, host)
  {
        if (shExpMatch(url,"ftp:*")||
            dnsDomainIs(host,"localhost")||
            dnsDomainIs(host,".sjtu.edu.cn")||
            dnsDomainIs(host,".byr.cn")||
            dnsDomainIs(host,".sixxs.org")||
            dnsDomainIs(host,".youtube.com")||
            dnsDomainIs(host,".twitter.com")||
            dnsDomainIs(host,".twimg.com")||
            dnsDomainIs(host,"mxd.sdo.com")||
            dnsDomainIs(host,"ifttt.com")||
            dnsDomainIs(host,".newsmth.net")||
            dnsDomainIs(host,".letv.com")||
            dnsDomainIs(host,".letvdns.com")||
            isInNet(host,"127.0.0.1","255.255.255.255")||
            isInNet(host,"1.1.1.1","255.255.255.255")||
            isInNet(host,"10.0.0.0","255.0.0.0")||
            isInNet(host,"172.16.0.0","255.240.0.0")||
            isInNet(host,"192.168.0.0","255.255.0.0")||
            isInNet(host,"59.78.0.0","255.255.192.0")||
            isInNet(host,"111.186.0.0","255.255.192.0")||
            isInNet(host,"207.46.124.0","255.255.255.0")||
            isInNet(host,"207.46.125.0","255.255.255.0")||
            isInNet(host,"211.80.0.0","255.255.0.0")||
            isInNet(host,"218.193.0.0","255.255.0.0")||
            isInNet(host,"219.228.0.0","255.254.0.0")||
            isInNet(host,"61.164.36.0","255.255.255.0")||
            isInNet(host,"221.130.45.0","255.255.255.0")||
            isInNet(host,"202.120.0.0","255.255.192.0"))
           return "DIRECT";
        else if (dnsDomainIs(host,"www.google.com")||
                 dnsDomainIs(host,"www.google.com.hk"))
           return "PROXY 202.112.26.250:8080";
	else if (dnsDomainIs(host,".org")||
		 dnsDomainIs(host,".net"))
           return "PROXY 202.112.26.250:8080";
        else
           return "PROXY 202.112.26.250:8080";
  }
