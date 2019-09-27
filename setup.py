# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in vuefrappe/__init__.py
from vuefrappe import __version__ as version

setup(
	name='vuefrappe',
	version=version,
	description='test frappe with vue page',
	author='ahmadragheb',
	author_email='ahmedragheb75@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
