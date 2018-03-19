#!/bin/bash
status=`gpio read 0`
if [ 0 -eq $status ];then
    gpio write 0 1
else
    gpio write 0 0
fi
status=`gpio read 0`
echo $status
