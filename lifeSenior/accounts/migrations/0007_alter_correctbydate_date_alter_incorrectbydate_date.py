# Generated by Django 4.2.2 on 2023-07-13 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_alter_correctbydate_date_alter_incorrectbydate_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='correctbydate',
            name='date',
            field=models.DateField(verbose_name='DATE'),
        ),
        migrations.AlterField(
            model_name='incorrectbydate',
            name='date',
            field=models.DateField(verbose_name='DATE'),
        ),
    ]
