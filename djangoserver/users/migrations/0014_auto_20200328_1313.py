# Generated by Django 3.0.3 on 2020-03-28 13:13

from django.db import migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_auto_20200323_1756'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='avatar',
            field=imagekit.models.fields.ProcessedImageField(blank=True, upload_to='users/'),
        ),
    ]
