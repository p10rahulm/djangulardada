from rest_framework import permissions


class IsAccountOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, account):
        print("only hi")
        if request.user:
            print("hi hellow")
            return account == request.user
        return False