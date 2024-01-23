void render_image();
void export_png();
void send_mail();

void send_preview_to_client()
{
    render_image();
    export_png();
    send_mail();
}