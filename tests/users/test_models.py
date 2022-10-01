import pytest


def test_user_str(base_user):
    """Test the custom user model string representation"""
    assert base_user.__str__() == f"{base_user.username}"


def test_user_short_name(base_user):
    """Test that the user models get_short_name" method works"""
    short_name = f"{base_user.username}"
    assert base_user.get_short_name() == short_name


def test_user_full_name(base_user):
    """Test that the user models get_full_name method works"""
    full_name = f"{base_user.first_name} {base_user.last_name}"
    assert base_user.get_full_name == full_name


def test_base_user_email_is_normalized(base_user):
    """Test that a new users email is normalized"""
    email = "test@test.com"
    assert base_user.email == email.lower()


def test_super_user_email_is_normalized(super_user):
    """Test an admin users email is normalized"""
    email = "test@test.com"
    assert super_user.email == email.lower()


def test_super_user_is_staff(user_factory):
    """Test that an error is raised wha an admin user has is_staff set to false"""
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=True, is_staff=False)
    assert str(err.value) == "Superusers must have is_staff=True"


def test_super_user_is_not_superuser(user_factory):
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=False, is_staff=True)
    assert str(err.value) == "Superusers must have is_superuser=True"


def test_create_user_with_no_email(user_factory):
    with pytest.raises(ValueError) as err:
        user_factory.create(email=None)
    assert str(err.value) == "Base User Account: An email address is required"


def test_create_user_with_no_username(user_factory):
    with pytest.raises(ValueError) as err:
        user_factory.create(username=None)
    assert str(err.value) == "Please supply a username"


def test_create_user_with_no_first_name(user_factory):
    with pytest.raises(ValueError) as err:
        user_factory.create(first_name=None)
    assert str(err.value) == "Please supply a first name"


def test_create_user_with_no_last_name(user_factory):
    with pytest.raises(ValueError) as err:
        user_factory.create(last_name=None)
    assert str(err.value) == "Please supply a last name"


def test_create_super_user_with_no_email(user_factory):
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=True, is_staff=True, email=None)
    assert str(err.value) == "admin account: Please provide a valid email address"


def test_create_super_user_with_no_password(user_factory):
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=True, is_staff=True, password=None)
    assert str(err.value) == "superusers must have a password"


def test_create_user_with_invalid_email(user_factory):
    with pytest.raises(ValueError) as err:
        user_factory.create(email="test.com")
    assert str(err.value) == "You must provide a valid email address"
