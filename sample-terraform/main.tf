terraform {
  required_version = ">= 1.0"
}

variable "greeting" {
  type    = string
  default = "Hello from Terraform"
}

resource "null_resource" "hello" {
  triggers = {
    greeting = var.greeting
  }

  provisioner "local-exec" {
    command = "echo ${var.greeting}"
  }
}
