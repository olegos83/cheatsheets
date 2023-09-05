<header class="masthead" style="background-image: url('public/images/contact-bg.jpg')">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <div class="page-heading">
                    <h1>SmallMVC</h1>
                    <span class="subheading">simple MVC framework</span>
                </div>
            </div>
        </div>
    </div>
</header>
<div class="container">
    <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
            <h4>Our contacts</h4>
            <small>Address: Vasyok street, 88, Fedunya Town</small><br>
            <small>Tel: +38 (888) 888-88-88</small><br>
            <small>Email: vasyok@fedunya.net</small>
        </div>
        <div class="col-lg-8 col-md-10 mx-auto">
            <br><h4>Send us message</h4>
            <form action="contacts" method="post">
                <div class="control-group">
                    <div class="form-group floating-label-form-group controls">
                        <p><input type="text" class="form-control" name="name" placeholder="Name"></p>
                    </div>
                </div>
                <div class="control-group">
                    <div class="form-group floating-label-form-group controls">
                        <p><input type="text" class="form-control" name="email" placeholder="E-mail"></p>
                    </div>
                </div>
                <div class="control-group">
                    <div class="form-group floating-label-form-group controls">
                        <p><textarea rows="5" class="form-control" name="text" placeholder="Text"></textarea></p>
                    </div>
                </div>
                <br>
                <div id="success"></div>
                <div class="form-group">
                    <button type="submit" class="btn btn-secondary" id="sendMessageButton">Send</button>
                </div>
            </form>
        </div>
    </div>
</div>
