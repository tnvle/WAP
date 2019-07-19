<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!-- Footer -->
<footer>
    <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; MUM Students</p>
    </div>
    <!-- /.container -->
</footer>

<div id="myModal" class="modal fade">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Notice</h5>
            </div>
            <div class="modal-body">
                <p id="alertBody">Thank you for your ordering. We will delivery your order as soon as possible.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- Bootstrap core JavaScript -->
<script src="<c:url value="../../resources/script/jquery.min.js" />"></script>
<script src="<c:url value="../../resources/script/bootstrap.bundle.min.js"/>"></script>
<script src="<c:url value="../../resources/script/script.js"/>"></script>



</body>

</html>