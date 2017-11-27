<%--
  Created by IntelliJ IDEA.
  User: Anlu
  Date: 2017/11/27
  Time: 10:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<html>
<head>
    <title>Title</title>
    <script src="/js/jquery-3.2.1.min.js"></script>
    <script src="/js/hello.js"></script>

    <style>
        tr.b1{
            border: 1px solid gold;
        }
        /*td{*/
            /*border: 1px solid orangered;*/
        /*}*/
    </style>
</head>
<body>
<input id="basePath" value="${pageContext.request.contextPath}" type="hidden">
<h1>我是jsp页面</h1>

<button id="btn1" onclick="requestBulletinData()">请求公告数据</button>

<h2>表格展示数据</h2>
<table id="showTable"    cellspacing="1" cellpadding="4"  style="width: 100%;border-collapse:collapse; ">
  <tr class="b1">
      <td>公告标题</td>
      <td>区域</td>
      <td>报名开始时间</td>
      <td>报名结束时间</td>
  </tr>
</table>
</body>

</html>
