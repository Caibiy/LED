#!/bin/bash
status=`gpio read 0`
if [ 0 -eq $status ];then
  echo  "on"
else
  echo "off"
fi
